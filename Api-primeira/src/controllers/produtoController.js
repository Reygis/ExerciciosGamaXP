const { Produtos, Fabricantes } =require('../models');

const produtoController = {
    listarProdutos: async (req, res)=>{
        const listaDeProdutos = await Produtos.findAll({
            include: Fabricantes
        });
        res.status(201).json(listaDeProdutos);
    },
    async cadastrarProduto(req, res){
        console.log(req.user);
        const{ nome, preco, quantidade, fabricantes_id } = req.body;
        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricantes_id,
        });
        res.json(novoProduto);
    },
    async deletarProduto (req, res){
        try {
        const { id } = req.params;
        await Produtos.destroy({
            where: {
                id:id,
            },
        });
        res.status(204);
        } catch(error){
            return res.status(500).json('Ocorreu algum erro!, contate o Administrador do sistema');
        }
    
    },
    async atualizarProduto (req, res){
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;
        
        if(!id) return res.status(400).jason('ID não enviado!');
        const produtoAtualizado = await Produtos.update(
            { 
                nome,
                preco,
                quantidade 
            },
            {
                where:{
                   id:id,
                },
            });
            res.json('Produto Atualizado!');
    },
};

module.exports = produtoController;