import React, { Component } from 'react'

export default class QuanLyDoiTac extends Component {
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
        Quản lý đối tác
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="QuanLyDoiTac">Quản lý</a></li>
        <li className="active">Quản lý đối tác</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách đối tác</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã đối tác</th>
                    <th>Tên đối tác</th>
                    <th>SĐT</th>
                    <th>Khu vực</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Xi măng Hà Tiên
                    </td>
                    <td>0123456789</td>
                    <td>Hà Tiên</td>
                    <td>Confirmed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Cát Vũng Tàu
                    </td>
                    <td>0912345678</td>
                    <td>Vũng Tàu</td>
                    <td>Confirmed</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Gạch SGU
                    </td>
                    <td>0789513687</td>
                    <td>Hồ Chí Minh</td>
                    <td>Confirmed</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ngói Nha Trang
                    </td>
                    <td>08564782145</td>
                    <td>Nha Trang</td>
                    <td>Not Confirmed</td>
                  </tr>
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm đối tác</button>
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
