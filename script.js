function addMarkdown(markdown, placeholder) {
    var textarea = document.getElementById('textArea');
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
  
    var selectedText = textarea.value.substring(startPos, endPos);
    var newText = markdown + selectedText + markdown;
  
    textarea.value = textarea.value.substring(0, startPos) +
                     newText +
                     textarea.value.substring(endPos, textarea.value.length);
  
    textarea.focus();
    textarea.setSelectionRange(startPos + markdown.length, endPos + markdown.length);
  
    if (selectedText === '') {
      textarea.setAttribute('placeholder', placeholder);
    }
  }
  
  function saveText() {
    var textToSave = document.getElementById('textArea').value;
    var blob = new Blob([textToSave], {type: 'text/plain'});
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'notepad.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  