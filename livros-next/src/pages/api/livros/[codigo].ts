import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      controleLivro.excluir(parseInt(req.query.codigo as string));
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
};
