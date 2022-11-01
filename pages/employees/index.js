import { useEffect } from "react";
import RenderHead from "../../components/RenderHead";
import { useEmployeeStore } from "../../contexts/EmployeeContext";

export default function EmployeesPage() {
  const { fetch } = useEmployeeStore();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RenderHead pageTitle="Employees" />
      <div className="row">
        <h4>Employees Page</h4>
        <div className="col-md-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            accusantium reprehenderit minus, eveniet perferendis, necessitatibus
            optio vitae nam laudantium dolores id! Quia aspernatur distinctio
            nam error mollitia, aperiam officiis molestiae?
          </p>
        </div>
      </div>
    </>
  );
}
