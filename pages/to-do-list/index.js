import { useStore } from "../../contexts/MainContext";
import { useToDoListFetch } from "../../hooks/to-do-list/useToDoListFetch";
import RenderHead from "../../components/RenderHead";
import List from "../../components/employee/List";
import Form from "../../components/employee/Form";
import Statics from "../../components/employee/Statics";

export default function EmployeesPage() {
  const store = useStore();

  useToDoListFetch(store);

  return (
    <>
      <RenderHead pageTitle="To-Do-List" />
      <div className="row">
        <h4>To-Do-List Page</h4>
        <div className="col-md-4">
          <Statics store={store} />
        </div>
        <div className="col-md-4">
          <Form store={store} />
        </div>
        <div className="col-md-4">
          <List store={store} />
        </div>
      </div>
    </>
  );
}
