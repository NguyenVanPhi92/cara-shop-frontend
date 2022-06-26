import AdminSidebar from './../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';
export default function OrderManagement() {
  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-cart-shopping me-2'></i>Đơn Hàng /
                Quản Lí Đơn Hàng
              </h4>
              <AdminInfo />
            </nav>
            {/* search */}
            <div className='searchGroup mt-3 w-25'>
              <i className='fa-solid fa-magnifying-glass'></i>
              <input
                type='text'
                className='ms-2 w-80 p-0'
                placeholder='Nhập ID khách hàng'
              />
            </div>
            {/* table */}
            <table className='table mt-3 table-hover text-center align-middle'>
              <thead>
                <tr>
                  <th>Tên khách hàng</th>
                  <th>Mã đơn hàng</th>
                  <th>Tổng hóa đơn</th>
                  <th>Ngày</th>
                  <th>Tình trạng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nguyễn Vạn Phi</td>
                  <td>000101</td>
                  <td>120.000</td>
                  <td>25/05/2022</td>
                  <td>
                    <span className='btn btn-success' style={{width: '8rem'}}>Hoàn tất</span>
                  </td>
                </tr>
                <tr>
                  <td>Hoàng Hữu Nghĩa</td>
                  <td>000102</td>
                  <td>220.000</td>
                  <td>2/05/2022</td>
                  <td>
                    <span className='btn btn-warning' style={{width: '8rem'}}>Đang giao</span>
                  </td>
                </tr>
                <tr>
                  <td>Nguyễn Thành Luân</td>
                  <td>000103</td>
                  <td>320.000</td>
                  <td>02/06/2022</td>
                  <td>
                    <span className='btn btn-danger' style={{width: '8rem'}}>Đã hủy</span>
                  </td>
                </tr>
                <tr>
                  <td>Nguyễn Tiến Thành</td>
                  <td>000104</td>
                  <td>320.000</td>
                  <td>02/08/2022</td>
                  <td>
                    <span className='btn btn-success' style={{width: '8rem'}}>Hoàn tất</span>
                  </td>
                </tr>
                <tr>
                  <td>Nguyễn Phùng Thảo Nguyên</td>
                  <td>000105</td>
                  <td>220.000</td>
                  <td>03/05/2022</td>
                  <td>
                    <span className='btn btn-warning' style={{width: '8rem'}}>Đang giao</span>
                  </td>
                </tr>
                <tr>
                  <td>Nguyễn Công Khanh</td>
                  <td>000106</td>
                  <td>110.000</td>
                  <td>25/05/2022</td>
                  <td>
                    <span className='btn btn-success' style={{width: '8rem'}}>Hoàn tất</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
