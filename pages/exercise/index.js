import React, { Component } from  'react';
import DefaultLayout from '../../layout/defaultLayout/defaultLayout';

export default class Exercise extends Component {
    render() {
        return (
          <DefaultLayout>

            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        <section>
          <div className="container">
            <div className="overviews-title1">
              <h1 className="gtc-title f-s-40">Giới thiệu</h1>
              <div className="blue-gradient" style={{width: '20%'}} />
            </div>
            <div className="text-justify px-0 col-12 f-s-20">
              <p>
                Cùng với sự phát triển của khoa học - kĩ thuật và xã hội ngày nay là
                sự đa dạng hóa và phong phú trong các loại hình nghề nghiệp. Điều
                này đặt ra thách thức lớn cho mỗi người trong quá trình lựa chọn
                nghề nghiệp sao cho phù hợp với tính cách, đam mê và năng lực của
                bản thân. Chính vì vậy hoạt động hướng nghiệp là hết sức quan trọng.
                Hướng nghiệp không chỉ cần được chú trọng trong nhà trường mà còn
                cần được quan tâm bởi chính bản thân chúng ta.
              </p>
              <p>Bạn đã thật sự hiểu tính cách của mình hay chưa?</p>
              <p>
                Để hiểu thêm về bản thân để có thể phát triển những tiềm năng sẵn có
                của chính mình hãy cùng làm bài trắc nghiệm dưới đây. Kết quả phân
                tích từ bài trắc nghiệm sẽ có bạn biết bản thân mình phù hợp với
                ngành nghề nào trong tương lai. Tuy nhiên trong quá trình học tập,
                rèn luyện bản thân và giao tiếp xã hội những đặc điểm tính cách cũng
                như năng lực của mỗi cá nhân sẽ dần hoàn thiện và thay đổi; chính vì
                vậy kết quả của bài kiểm tra mang tính thời điểm và nên kiểm tra
                thường xuyên để có hướng điều chỉnh và phát triển phù hợp nhất.
              </p>
              <p>
                Kết quả bài kiểm tra cũng phụ thuộc vào độ trung thực của bạn với
                chính mình trong quá trình thực hiện.
              </p>
            </div>
            <div className="text-uppercase text-center pb-3">
              <a className="btn-result-blue f-s-40" href="/smart">Làm trắc nghiệm<br />
                tính cách nghề nghiệp
              </a>
            </div>
          </div>
        </section>
      </div>
          </DefaultLayout>
        )}
}