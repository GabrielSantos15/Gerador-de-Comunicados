const quill = new Quill('#editor', {
  theme: 'snow', 
  placeholder: 'Digite o comunicado aqui...',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link'],
      ['clean']
    ]
  }
});


const comunicado = document.querySelector("#comunicado")

document.querySelector("#titulo").addEventListener("input",()=>{
    comunicado.querySelector("h1").innerHTML = document.querySelector("#titulo").value
})
quill.on('text-change', function() {
  const html = quill.root.innerHTML;
  comunicado.querySelector("p").innerHTML = html;
});


document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    
    html2canvas(comunicado).then(canvas => {
        const link = document.createElement('a');
        link.download = 'comunicado.png';
        link.href = canvas.toDataURL(); // converte o canvas em imagem base64
        link.click(); // força o download
    });
})
