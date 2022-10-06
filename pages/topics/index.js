import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import {topics,topicClass} from '../../shared/data/dataTopic'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'
import Link from 'next/link'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.contentTopic = this.contentTopic.bind(this);
    this.state = {
      dataTopics: topics,
      activeTab: "1",
      topicClass: topicClass,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  contentTopic() {
    window.location.href = "/lesson";
  }
  render() {
    const topics = this.state.dataTopics.map((topic) => {
      return (
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.activeTab === topic.id.toString(),
            })}
            onClick={() => {
              this.toggle(topic.id.toString());
            }}
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
        <TabContent activeTab={this.state.activeTab}>
          {this.state.dataTopics.map((dataTopic) => {
            return (
              <TabPane tabId= {dataTopic.id.toString()}>
                <div
                  id="Class6"
                  className={
                    dataTopic.class === "Lớp 6"
                      ? "container tab-pane active show"
                      : "container tab-pane fade show"
                  }
                  style={{ overflowY: "scroll", height: "690px" }}
                >
                   {this.state.topicClass.map((topicclass) =>{ 
                     if (topicclass.parentID === dataTopic.parentID){
                      return (
                        <a
                        className="row t-de-none hover hover-c-grey b-bot py-2"
                        onClick={() => this.contentTopic()}
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
}
