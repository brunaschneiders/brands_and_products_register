import Brand from '../models/Brand';
import Product from '../models/Product';

class BrandController {
  async index(req, res) {
    try {
      const brands = await Brand.findAll({
        include: {
          model: Product,
          as: 'products',
          attributes: ['uid', 'name', 'quantity'],
        },
      });
      return res.json({ brands });
    } catch (error) {
      return res.json(error);
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const brand = await Brand.findByPk(uid, {
        include: {
          model: Product,
          as: 'products',
          attributes: ['uid', 'name', 'quantity'],
        },
      });

      return res.json({ brand });
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);

      return res.json({ brand });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) {}

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Brand.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('marca não encontrada');
      }

      return res.json({
        result: 'marca deletada com sucesso',
      });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }
}

export default new BrandController();
