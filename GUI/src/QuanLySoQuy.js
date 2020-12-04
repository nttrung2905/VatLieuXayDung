import React, { Component } from 'react'

export default class QuanLySoQuy extends Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý Sổ Quỹ
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="/QuanLySoQuy">Quản lý</a></li>
        <li className="active">Quản lý sổ quỹ</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách sổ quỹ</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã phiếu</th>
                    <th>Giá trị</th>
                    <th>Thời gian</th>
                    <th>Người nhận</th>
                    <th>Chi nhánh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>300.000.000
                    </td>
                    <td>25-11-2020</td>
                    <td>Phạm Nguyễn Minh Huy</td>
                    <td>Quận 1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>100.000.000
                    </td>
                    <td>25-11-2020</td>
                    <td>Phạm Đình Khoa</td>
                    <td>Quận 1</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>50.000.000
                    </td>
                    <td>25-11-2020</td>
                    <td>Phạm Nguyễn Minh Huy</td>
                    <td>Quận 1</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1.000.000.000
                    </td>
                    <td>25-11-2020</td>
                    <td>Phạm Nguyễn Minh Huy</td>
                    <td>Quận 1</td>
                  </tr>
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm phiếu</button>
                </td>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}
