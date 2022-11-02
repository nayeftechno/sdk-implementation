import { observer } from "mobx-react-lite";
import { useEmployeeStore } from "../../contexts/EmployeeContext";

function List() {
  const { getEmployees } = useEmployeeStore();
  return <p>{getEmployees.length}</p>;
}

export default observer(List);
