import axios from 'axios';
import queryString from 'query-string';
import { CompetenceInterface, CompetenceGetQueryInterface } from 'interfaces/competence';
import { GetQueryInterface } from '../../interfaces';

export const getCompetences = async (query?: CompetenceGetQueryInterface) => {
  const response = await axios.get(`/api/competences${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCompetence = async (competence: CompetenceInterface) => {
  const response = await axios.post('/api/competences', competence);
  return response.data;
};

export const updateCompetenceById = async (id: string, competence: CompetenceInterface) => {
  const response = await axios.put(`/api/competences/${id}`, competence);
  return response.data;
};

export const getCompetenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/competences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCompetenceById = async (id: string) => {
  const response = await axios.delete(`/api/competences/${id}`);
  return response.data;
};
