// employeeActions.js
import axios from 'axios';
import {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
} from '../store/employeeSlice';

export const fetchEmployees = () => async (dispatch) => {
  try {
    dispatch(fetchEmployeesStart());
    const response = await axios.get('https://dummyapi.com/employees'); // Replace with your API endpoint
    dispatch(fetchEmployeesSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeesFailure(error.message));
  }
};
