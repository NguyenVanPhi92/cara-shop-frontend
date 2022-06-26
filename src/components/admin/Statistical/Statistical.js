import AdminSidebar from '../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';

function Statistical() {
  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-shirt'></i> Sản Phẩm / Thống Kê
              </h4>
              <AdminInfo />
            </nav>
            {/*search  */}

            <div className='search-time-group mt-4'>
              <div className='searchGroup me-3'>
                <i className='fa-solid fa-magnifying-glass'></i>
                <input
                  type='text'
                  className='ms-2 w-75 p-0'
                  placeholder='Tìm Kiếm...'
                />
              </div>
              <input type='date' defaultValue='dd/mm/yyyy' />
              <i
                className='fa-solid fa-arrow-right'
                style={{ margin: '0 1rem' }}
              ></i>
              <input type='date' defaultValue='dd/mm/yyyy' />
            </div>

            {/* table */}
            <table className='table table-bordered mt-4 text-center align-middle table-hover'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Tên sản phẩm</th>
                  <th scope='col'>DVT</th>
                  <th scope='col'>Tồn Đầu</th>
                  <th scope='col'>Nhập</th>
                  <th scope='col'>Xuất</th>
                  <th scope='col'>Tồn cuối</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <th>Áo Jacket</th>
                  <td>cái</td>
                  <td>7</td>
                  <td>10</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>2</td>
                  <th>Quần Jeans</th>
                  <td>cái</td>
                  <td>5</td>
                  <td>10</td>
                  <td>5</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <th>Quần Kaki</th>
                  <td>cái</td>
                  <td>6</td>
                  <td>20</td>
                  <td>10</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>4</td>
                  <th>Quần tây</th>
                  <td>cái</td>
                  <td>4</td>
                  <td>10</td>
                  <td>5</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>5</td>
                  <th>Áo thun nam cổ tròn</th>
                  <td>cái</td>
                  <td>12</td>
                  <td>10</td>
                  <td>2</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>6</td>
                  <th>Áo thun nam cổ tim</th>
                  <td>cái</td>
                  <td>11</td>
                  <td>10</td>
                  <td>6</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>7</td>
                  <th>Áo khoác bomber</th>
                  <td>cái</td>
                  <td>9</td>
                  <td>10</td>
                  <td>9</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>8</td>
                  <th>Áo khoác Field Jacket</th>
                  <td>cái</td>
                  <td>6</td>
                  <td>10</td>
                  <td>6</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>9</td>
                  <th>Đầm dáng xòe</th>
                  <td>cái</td>
                  <td>14</td>
                  <td>10</td>
                  <td>12</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
            {/* pagination */}
            <div className='d-flex justify-content-end'>
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistical;
