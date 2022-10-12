import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import {topics,topicClass} from '../../shared/data/dataTopic'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'
import { useSelector } from "react-redux";

export default function Example () {
  const data = useSelector((state) => state.topic)
  console.log(data.class)
    const topics = data.topic.map((topic) => {
      return (
        <NavItem>
          <NavLink
          >
            {topic.class}
          </NavLink>
        </NavItem>
      );
    });
    return (
      <DefaultLayout>

      <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
          />
      <div className="container">
        <div className="px-0 f-s-26">
          Danh mục chủ đề
          <div className="blue-gradient" style={{ width: "180px" }}></div>
        </div>
        <Nav tabs>{topics}</Nav>
        <TabContent >
          {data.class.map((dataTopic) => {
            return (
              <TabPane tabId= {dataTopic.id.toString()}>
                <div
                  id="Class6"
                  style={{ overflowY: "scroll", height: "690px" }}
                >
                   {data.class.map((topicclass) =>{ 
                     if (topicclass.parentID === dataTopic.parentID){
                      return (
                        <a
                        className="row t-de-none hover hover-c-grey b-bot py-2"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-1 t-a-center">{topicclass.number}</div>{" "}
                        <div className="col-11 up">
                            {topicclass.title}
                        </div>
                      </a>
                      )
                     }
                    }
                  )} 
                </div>
              </TabPane>
            );
          })} 
        </TabContent>
      </div>
      </DefaultLayout>
     
    );
  }
