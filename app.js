const express = require('express');
const app = express();
const port = 3000;

const receitasCafes = [
    {"nome": "Expresso", "ingredientes": ["agua", "po de cafe"], "instrucoes": "Use maquina de cafe expresso."},
    {"nome": "Cafe Americano", "ingredientes": ["agua", "po de cafe"], "instrucoes": "Misture agua quente com cafe expresso."},
    {"nome": "Cafe Latte", "ingredientes": ["leite vaporizado", "cafe expresso"], "instrucoes": "Misture leite vaporizado com cafe expresso, finalizando com espuma de leite no topo."},
    {"nome": "Cappuccino", "ingredientes": ["leite vaporizado", "cafe expresso", "espuma de leite", "canela ou cacau em po (opcional)"], "instrucoes": "Prepare um expresso, adicione leite vaporizado e cubra com espuma de leite. Polvilhe canela ou cacau em po para decorar."},
    {"nome": "Mocha", "ingredientes": ["leite vaporizado", "cafe expresso", "calda de chocolate", "chantilly (opcional)"], "instrucoes": "Misture cafe expresso com calda de chocolate, adicione leite vaporizado e finalize com chantilly."},
    {"nome": "Macchiato", "ingredientes": ["cafe expresso", "espuma de leite"], "instrucoes": "Prepare um expresso e adicione uma pequena quantidade de espuma de leite por cima."},
    {"nome": "Cafe com Leite", "ingredientes": ["leite vaporizado", "cafe coado ou expresso"], "instrucoes": "Misture partes iguais de cafe coado ou expresso com leite vaporizado."},
    {"nome": "Affogato", "ingredientes": ["cafe expresso", "sorvete de creme ou baunilha"], "instrucoes": "Despeje cafe expresso quente sobre uma bola de sorvete de creme ou baunilha."},
    {"nome": "Flat White", "ingredientes": ["leite vaporizado", "cafe expresso"], "instrucoes": "Prepare um expresso e adicione leite vaporizado, visando uma proporcao maior de cafe na mistura."},
    {"nome": "Iced Coffee", "ingredientes": ["cafe coado ou expresso", "gelo", "leite ou creme (opcional)", "adocante (opcional)"], "instrucoes": "Esfrie o cafe coado ou expresso e sirva sobre gelo. Adicione leite, creme ou adocante a gosto."}
];

app.get('/receitas', (req, res) => {
    res.json(receitasCafes);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
