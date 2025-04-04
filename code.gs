function onOpen() {
  DocumentApp.getUi().createMenu('Translate')
  .addItem('Translate With AI', 'showSiderbar')
  .addToUi();
}

function showSiderbar() {
  const html = HtmlService.createHtmlOutputFromFile('translateUI').setTitle('Translate With AI');
  DocumentApp.getUi().showSidebar(html);
}

const GEMINI_API_KEY = 'AIzaSyAi1Euhs3bFWVgNMgVZxn9xf1vqG1ZzWMo'
const GEMINI_API = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`

function prompt_translate(
    translate_style, 
    source_language, target_language, 
    input_text, context
) {
  return `Translate the following text from ${source_language} to ${target_language} using a ${translate_style} style, considering the following context: '${context}'. Return only the translated text without any additional content: '${input_text}'`
}

function gemini_translate(
    temperature, translate_style, 
    source_language, target_language, 
    input_text, context
) {

  let prompt = prompt_translate(translate_style, source_language, target_language, input_text, context);

  const response = UrlFetchApp.fetch(GEMINI_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({ 
          contents: [{ parts: [{ text: prompt }] }], 
          generationConfig: { temperature: temperature } 
      })
  });

  const data = JSON.parse(response.getContentText());
  const text = data.candidates[0].content.parts[0].text;

  if (data && data.candidates && data.candidates.length > 0) {
      return text;
  }
  return 'Translate Failed!';
}

function request_model(
    model, temperature, 
    translate_style, 
    source_language, target_language, 
    input_text, context
) {
    if (model === 'Gemini') {
        return gemini_translate(
          temperature, translate_style, 
          source_language, target_language, 
          input_text, context
        );
    }

    return "";
}

function getSelectionDocument() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  const text = [];
  if (selection) {
    const elements = selection.getSelectedElements();
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        const element = elements[i].getElement().asText();
        const startIndex = elements[i].getStartOffset();
        const endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      } else {
          const element = elements[i].getElement();
          const elementText = element.asText().getText();
          if (elementText) {
            text.push(elementText);
          }
      }
    }
  }
  if (!text.length) return null;
  return text[0];
}

function getBodyDocument() {
  let doc = DocumentApp.getActiveDocument();
  let body = doc.getBody();
  let text = body.getText();
  return text;
}

function setBodyDocument(model, temperature, 
    translate_style, 
    source_language, target_language, 
    input_text) {

    let text = request_model(model, temperature, translate_style, source_language, target_language, input_text, input_text);
    let doc = DocumentApp.getActiveDocument();
    let body = doc.getBody();

    body.clear();
    body.setText(text);
}
