import AdminSidebar from './../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';
function AccountManagement() {
  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-user me-2'></i>Khách Hàng / Quản lí
                khách hàng
              </h4>
              <AdminInfo />
            </nav>
            {/* search */}
            <div className='d-flex align-items-baseline'>
            <div className='searchGroup mt-3 w-50'>
              <i className='fa-solid fa-magnifying-glass'></i>
              <input
                type='text'
                className='ms-2 w-80 p-0'
                placeholder='Nhập họ, tên khách hàng.'
              />
            </div>
            <div className='search-time-group ms-3 w-100'>
              <input type='date' defaultValue='dd/mm/yyyy' className='w-25'/>
              <i
                className='fa-solid fa-arrow-right mx-2'
           
              ></i>
              <input type='date' defaultValue='dd/mm/yyyy'  className='w-25'/>
            </div>
            </div>
            {/* table */}
            <table className='table mt-3 table-hover text-center align-middle'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Tổng hóa đơn</th>
                  <th>Tổng thanh toán</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nguyễn</td>
                  <td>Vạn Phi</td>
                  <td>nvp@gmail.com</td>
                  <td>02135466</td>
                  <td>12</td>
                  <td>1200000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nguyễn</td>
                  <td>Thành Luân</td>
                  <td>ntl@gmail.com</td>
                  <td>021769876</td>
                  <td>8</td>
                  <td>1500000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hoàng</td>
                  <td>Hữu Nghĩa</td>
                  <td>hhn@gmail.com</td>
                  <td>087335466</td>
                  <td>15</td>
                  <td>1400600</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nguyễn</td>
                  <td>Tiến Thành</td>
                  <td>ntt@gmail.com</td>
                  <td>0863746466</td>
                  <td>8</td>
                  <td>1402300</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Nguyễn</td>
                  <td>Phùng Thảo Nguyên</td>
                  <td>nptn@gmail.com</td>
                  <td>0576335466</td>
                  <td>9</td>
                  <td>120600</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Nguyễn</td>
                  <td>Công Khanh</td>
                  <td>nck@gmail.com</td>
                  <td>085725466</td>
                  <td>4</td>
                  <td>1434500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountManagement;
