async function comprar(){
    try{

        //Validação compra
        if(document.querySelector('#boleto').checked == true){
            console.log("boleto");
            //redirecionar boleto   
        }else{
                const numeroCartao = document.querySelector('#numeroCartao').value;
                const nomeNoCartao = document.querySelector('#nomeNoCartao').value;
                const cvvCartao = document.querySelector('#cvvCartao').value;
                const parcelaCompra = document.querySelector('#parcelaCompra').value;

            if((document.querySelector('#entregaRapida').checked == false && document.querySelector('#entregaComum').checked == false) || 
                document.querySelector('#compraComCartao').checked == false ||

                nomeNoCartao == "" ||
                !isNaN(nomeNoCartao) || 
                isNaN(cvvCartao) || 
                cvvCartao.length != 3 ||
                Number.isInteger(Number(parcelaCompra)) == false || 
                Number(parcelaCompra) > 12 ||
                Number(parcelaCompra) < 1 ) {

                    alert("Digite os todos dados corretamente!");

            
            }else{
                  
                const token = localStorage.getItem('token');

                    //header
                const headerToken = new Headers({
                    'Content-Type':'application/json',
                    authorization:token
                });
                
                //Dados
                const data = {  
                    token:token,
                    numeroCartao:numeroCartao
                }; 
                
                //fetch
                const responseObject = await fetch('http://localhost:3333/efetuandoCompra',{
                    method:'POST',
                    headers:headerToken,
                    body:JSON.stringify(data)
                });

                const response = await responseObject.json();

                if(response.resultado == "autenticacaoErro") {
                    location.href = "/login";
                }else if(response.resultado == "sucesso"){
                    alert("Compra realizada com sucesso");
                    location.href = "/";
                }else if(response.resultado == "cartaoInvalido"){
                    alert("O número do cartão é inválido!!!");
                };
            }
        }
        
    }catch(err){
        console.log('Erro na função:'+err);
    };
};