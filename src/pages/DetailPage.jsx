import React, { useContext, useEffect, useState } from "react";
import { CurrentServiceContext } from "../contexts/CurrentServiceContext";
import { useParams } from "react-router-dom";
import DetailService from "../components/DetailService/DetailService";

const DetailPage = () => {
  const servicesList = useContext(CurrentServiceContext);
  const [service, setService] = useState({});
  const params = useParams();

  const getServiceById = (id) => {
    return servicesList.find((s) => s.id === +id);
  };

  useEffect(() => {
    const data = getServiceById(params.id);
    setService(data);
  }, []);

  return (
    <div className="container">
      <DetailService service={service} />      
    </div>
  );
};

export default DetailPage;
