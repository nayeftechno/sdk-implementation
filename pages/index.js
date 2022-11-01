import RenderHead from "../components/RenderHead";

export default function HomePage() {
  return (
    <>
      <RenderHead pageTitle="Home" />
      <div className="row">
        <h4>Home Page</h4>
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
