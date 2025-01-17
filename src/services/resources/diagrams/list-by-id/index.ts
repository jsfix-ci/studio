import { api } from "services/api/diagrams";

export async function listById(id: string) {
  try {
    const { data } = await api.get(`/diagrams/${id}`);
    return data;
  } catch (error) {
    console.error("Erro ao listar os diagramas por id", error);
  }
}
