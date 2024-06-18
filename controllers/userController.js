import usuarioModel from '../model/user.js';

class userController {
  async index(req, res) {
    try {
      const usuarios = await usuarioModel.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuários' });
    }
  }

  async store(req, res) {
    try {
      const { email } = req.body;
      const usuario = await usuarioModel.create({ email });
      res.status(201).json(usuario);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao criar usuário' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { email } = req.body;
      await usuarioModel.update(Number(id), { email });
      res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar usuário' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await usuarioModel.delete(Number(id));
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao deletar usuário' });
    }
  }
}

export default new userController();
