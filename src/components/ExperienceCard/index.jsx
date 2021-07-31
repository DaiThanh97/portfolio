import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
} from "reactstrap";
import { Fade } from 'react-reveal';
import './style.css';

const ExperienceCard = ({ data }) => {
  return (
    <div id="company-card">
      <Fade left duration={1000} distance="40px">
        <Card style={{ flex: 1 }} className="shadow-lg--hover shadow border-0 text-center rounded card-info">
          <CardHeader style={{ background: data.companyColor }} className="card-header" >
            <h5 className={data.companyTextColor}>{data.company}</h5>
          </CardHeader>
          <CardBody className="py-5 company-card">
            <img
              className=" bg-white rounded-circle mb-3 img-center img-fluid"
              src={data.companylogo}
              style={{ width: "100px", height: "100px", boxShadow: "5px 7px 10px 0px rgba(0,0,0,0.35)" }}
              alt=""
            />
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText className="description my-3 text-left">
              {data.desc}
              <ul>
                {
                  data.descBullets ?
                    data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>
                    }) : null
                }
              </ul>
            </CardText>
            <div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </div>
  );
}

export default ExperienceCard;