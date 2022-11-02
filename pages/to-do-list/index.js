import { useEffect } from "react";
import RenderHead from "../../components/RenderHead";
import List from "../../components/employee/List";
import { useToDoStore } from "../../contexts/DataContext";

export default function EmployeesPage() {
  const { fetch } = useToDoStore();

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
        <div className="col-md-4">Second</div>
        <div className="col-md-4">
          <List />
        </div>
      </div>
    </>
  );
}
