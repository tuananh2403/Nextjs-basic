import React, { Component } from "react"
import { dataQuestions }  from "../../shared/data/dataQuestion"
import DefaultLayout from '../../layout/defaultLayout/defaultLayout';


export default class Smart extends Component {
  constructor(props) {
    super(props);
    this.state = {
              current: 1,
              dataQuestions: dataQuestions,
              startPage: 0,
              endPage : 10,
              totalPages: Math.ceil(dataQuestions.length /10),
              defaultValue : [1,2,3,4,5]
    };
  }
  btnPrevious = (current) => {
    let numberPage = document.getElementById("numberPage");
        current--;
    if (current <= 1) {
      current = 1;
    }
    this.setState({ current: current });
    numberPage.value = current ;
    this.setState({
      startPage: (current - 1) * 10,
    })
    this.setState({
      endPage: current  * 10
    })
  };
  btnNext = (current) => {
    let numberPage = document.getElementById("numberPage");
    current++;
    if (current >= this.state.totalPages) {
      current = this.state.totalPages;
    }
    this.setState({ current: current });
    numberPage.value = current ;
    this.setState({
      startPage: (current - 1) * 10
    })
    this.setState({
      endPage: current  * 10
    })
  };
  checkRadio = () => {
    var buttonFinish = document.getElementById('finish');
    var radios = document.getElementsByClassName('sizeRadio');
    var count = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            count++;
        }
    }
    if (count == 10) {
        buttonFinish.disabled = false;
    } else {
        buttonFinish.disabled = true;
    }
    console.log(count)
  }
  render() {
    return (
      <DefaultLayout>
      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
        />
        <section>
          <div className="container">
            <div className="overviews-title1">
              <div className="f-s-30 f-f-Gilroy-Bold pt-3 pb-1">
                Trắc nghiệm tính cách nghề nghiệp
              </div>
              <div
                className="blue-gradient"
                style={{ width: "20%", marginBottom: "40px" }}
              />
            </div>
            <div
              className="text-center f-s-30"
              style={{ marginBottom: "20px" }}
            >
              <p className="block-green f-f-Gilroy-Bold">
                Làm bài TRẮC NGHIỆM HƯỚNG NGHIỆP
              </p>
            </div>
            <div className="block-gray text-justify f-s-22 col-12">
              <p
                style={{ padding: "30px 20px 0", color: "#4a4a4a" }}
                className="f-f-Gilroy-Regular"
              >
                Các ý liệt kê trong mỗi bảng hướng đến các tố chất và năng lực
                cá nhân của bạn. Với mỗi ý sẽ có nhiều mức độ phù hợp với bạn,
                tương ứng với mỗi mức độ phù hợp, sẽ được quy định một điểm số
                tương ứng. Điểm số tương ứng này do bạn đánh giá và tự điền vào
                bảng theo thang đo sau.
              </p>
              <ol
                style={{ padding: "0 20px 30px 40px", color: "#4a4a4a" }}
                className="f-f-Gilroy-Bold f-s-22"
              >
                <li>Bạn thấy ý đó chưa bao giờ đúng với bạn – cho 0 điểm</li>
                <li>
                  Chỉ thấy ý đó chỉ đúng trong một vài trường hợp – cho 1 điểm
                </li>
                <li>Bạn thấy ý đó chỉ một nửa là đúng với bạn – cho 2 điểm</li>
                <li>
                  Bạn thấy ý đó gần như là đúng với bạn trong hầu hết mọi trường
                  hợp, chỉ có một vài trường hợp là chưa đúng lắm – cho 3 điểm
                </li>
                <li>
                  Bạn thấy ý đó là hoàn toàn đúng với bạn, không thể nào khác đi
                  được – cho 4 điểm
                </li>
              </ol>
            </div>
            <div className="f-s-16 f-f-Gilroy-Bold m-w-100 pt-2 pb-4">
              <table className="table-multiple-choice m-w-100">
                <thead className="c-white">
                  <tr className style={{ backgroundColor: "#0573ad" }}>
                    <td className="py-4">Điểm</td>
                    {this.state.defaultValue.map((value) => {
                        return (
                            <td className="t-a-center">
                            <span className="table-point">{value}</span>
                            </td>
                        )
                    })}
                  </tr>
                </thead>
                <tbody id="list">
                    {this.state.dataQuestions.map((question,index) => {
                        if(index >= this.state.startPage && index < this.state.endPage){
                        return (
                            <tr className="tr-exercise">
                            <td className="col-table-cont">
                              {question.id}. {question.question}
                            </td>
                            {this.state.defaultValue.map((value) => {
                                return (
                                    <td className="t-a-center">
                                    <input
                                        type="radio"
                                        onClick={() => this.checkRadio()}
                                        className="sizeRadio PartR"
                                        name={question.nameRadio}
                                        defaultValue={value}
                                    />
                                    <label htmlFor={1} />
                                    </td>
                                )
                            })}
                          </tr>
                        )}
                    })}
                </tbody>
              </table>
              <div className="input-group pt-2 pb-1">
                <button
                  className="btn btn-outline-secondary px-4"
                  id="btnPrev"
                    onClick={() => this.btnPrevious(this.state.current)}                
                >
                  Lùi lại
                </button>
                <input
                  type="input"
                  disabled="true"
                  className="t-a-center form-control"
                  style={{ maxWidth: "100px", maxHeight: "40px" }}
                  id="numberPage"
                  name
                  defaultValue={'1'}
                />
                <button
                  className="btn btn-outline-secondary px-4"
                  id="btnNext"
                    onClick={() => this.btnNext(this.state.current)}
                >
                  Kế tiếp
                </button>
              </div>
              <div className="t-a-center">
                <button
                  className="btn btn-success py-2 px-4 f-s-22"
                  id="finish"
                  onclick="BtnFinish()"
                  style={{ color: "white" }}
                  disabled
                >
                  Hoàn thành
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      </DefaultLayout>
    );
  }
}
