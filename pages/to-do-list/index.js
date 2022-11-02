import { useEffect } from "react";
import { useMainStore } from "../../contexts/MainContext";
import RenderHead from "../../components/RenderHead";
import List from "../../components/employee/List";
import Form from "../../components/employee/Form";

export default function EmployeesPage() {
  const { toDoStore } = useMainStore();
  const { fetch } = toDoStore;

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RenderHead pageTitle="To-Do-List" />
      <div className="row">
        <h4>To-Do-List Page</h4>
        <div className="col-md-4">First</div>
        <div className="col-md-4">
          <Form />
        </div>
        <div className="col-md-4">
          <List />
        </div>
      </div>
    </>
  );
}
