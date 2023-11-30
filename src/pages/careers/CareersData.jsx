import { useLoaderData, useParams } from "react-router-dom";

export default function CareersData() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="careers-data">
      <h2>Career Details for {career.title} </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          commodi fuga temporibus voluptate obcaecati quis reiciendis culpa
          doloribus. Dolore repellat soluta minus nisi. Molestias maxime
          aspernatur pariatur, deserunt quis iste eius voluptatum reprehenderit
          distinctio facere?
        </p>
      </div>
    </div>
  );
}

//loader function

export const careersDataLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res;
};
