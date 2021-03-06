import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from '../SideBar/AdminSidebar';
import productService from '../../../service/productService'; 
import AdminInfo from '../adminInfo/AdminInfo';

import '../../../assets/css/admin/style.css';
import '../../../assets/css/admin/style.css';
import './productManagement.css';


function ProductManagement() {

  const [productType, setProductType] = useState('');
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescr, setProductDescr] = useState('');
  const [productNum, setProductNum] = useState('');
  const [cateId, setCateId] = useState('');

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const changedImage = React.useRef(null);
  const imageChanger = React.useRef(null);
  
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const [products, setProducts] = useState([]);

  let vndFormat = Intl.NumberFormat('vi-VN')



// count table order
  let count = 1;

  const loadProducts = () => {
    productService.getAllProducts()
      .then((result) =>{
        setProducts(result.data);
      })
      .catch((err) => {console.log(err)})
  }

  const loadProductsByCate=  (cateId) => {
    productService.getProductByType(cateId)
    .then((result) =>{
      setProducts(result.data);
    })
    .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const getProduct = function (id) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        document.getElementById('productId').innerText = id;
        document.getElementById('productNameEdit').value =
          products[i].productName;
        // document.getElementById('proImgUpdate').value = products[i].imageUrl;
        document.getElementById('productPriceEdit').value = products[i].price;
        document.getElementById('productDescrEdit').value = products[i].descr;
        document.getElementById('productNumEdit').value = products[i].stock;
      }
    }
  };

  const resetAddProForm = () =>{
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDescr').value = '';
    document.getElementById('productNum').value = '';
  }

  const addnewProduct = (e) => {
    let gend = '';
    if (productType === '1') {
      gend = 'N???';
    } else if (productType === '2') {
      gend = 'Nam';
    } else if (productType === '3') {
      gend = 'Tr??? em';
    } else if (productType === '4') {
      gend = 'Tr??? s?? sinh';
    }
    
    const newPro = {
      productName: productName,
      imageUrl: image,
      gender: gend,
      descr: productDescr,
      price: productPrice,
      stock: productNum,
    };

    productService.addProduct(productType, newPro).then(() => {
      console.log('Add new Product Success');
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: '???? Th??m S???n Ph???m M???i',
        showConfirmButton: false,
        timer: 1000,
      });
      loadProducts();
    }).catch((err) => {console.log(`add new product problem: ${err}`)})
  };

  
  const postImg = async (e) =>{

      const formData = new FormData();
      formData.append("file", e.target.files[0])
      
      productService.addImgFile(formData)
      .then((response) => {
       setImage(response.data.data)
      }).catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  const updatePro = (id) => {    
    const pro = {
      productName: document.getElementById('productNameEdit').value,
      imageUrl: image,
      descr: document.getElementById('productDescrEdit').value,
      price: document.getElementById('productPriceEdit').value,
      stock: document.getElementById('productNumEdit').value,
    };
    productService.updateProduct(id, pro).then(() => {
      Swal.fire({
        title: `C???p nh???t s???n ph???m th??nh c??ng`,
        icon: 'success',
      });
      loadProducts();
    });
  };

  const changeFile = async (e) => {
    setFile(e.target.files[0]);
    postImg(e);
  }

  const deletePro = (id) => {
    productService.deleteProduct(id).then(() => {
      loadProducts();
    });
  };

  const handleImageUpload = async (e) => {
    const [imgFile] = e.target.files;
    if (imgFile) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = imgFile;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(imgFile);
    }
  };

  const handleImageChange = async (e) => {
    const [imgFile] = e.target.files;
    if (imgFile) {
      const reader = new FileReader();
      const { current } = changedImage;
      current.file = imgFile;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(imgFile);
    }
  };



  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'> 
            {/*  */}
            <nav className='d-flex align-items-baseline justify-content-between'>
              <div>
                <h4>
                  <i className='fa-solid fa-shirt'></i> S???n Ph???m / Qu???n L?? S???n
                  Ph???m
                </h4>
              </div>
              <div>
                <AdminInfo />
              </div>
            </nav>
            {/*  */}
            <div className='d-flex align-item-center justify-content-between mt-4'>
              <div className='d-flex align-item-center'>
                <div className='searchGroup'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                  <input
                    type='text'
                    className='ms-2'
                    placeholder='T??m Ki???m...'
                  />
                </div>
                <div className='ms-4 my-auto'>
                  <i className='fa-solid fa-filter me-1 icon-color'></i>
                  L???c Theo
                </div>
                <div className='ms-2 my-auto'>
                  <select className='form-select'
                  onChange={(e) => {
                    e.target.value === 'all' ? loadProducts() : loadProductsByCate(e.target.value)
                  }}
                  >
                    <option value='all'>T???t C???</option>
                    <option value='1'>Qu???n ??o nam</option>
                    <option value='2'>Qu???n ??o n???</option>
                    <option value='3'>????? tr??? em</option>
                    <option value='4'>????? tr??? s?? sinh</option>
                  </select>
                </div>
              </div>

              <button
                className='addNewProductBtn'
                data-bs-toggle='modal'
                data-bs-target='#addProductModal'
                onClick={resetAddProForm}
              >
                <i className='fa-solid fa-plus me-1'></i>
                Th??m S???n Ph???m
              </button>
            </div>

            {/* table products */}
            <table className='table mt-4 tableProduct align-middle text-center table-hover'>
              <thead>
                <tr className='align-middle'>
                  <th>#</th>
                  <th scope='col'>T??n S???n Ph???m</th>
                  <th scope='col'>H??nh ???nh</th>
                  <th scope='col'>M?? T??? s???n Ph???m</th>
                  <th scope='col'>S??? L?????ng</th>
                  <th scope='col'>Gi??</th>
                  <th scope='col'>T??y ch???n</th>
                </tr>
              </thead>
              <tbody>
                {
                products &&
                products.map((product) => (
                
                  <tr key={product.id}>
                
                    <th>{count++}</th>
                    <th>{product.productName}</th>
                    <td>
                      <img src={product.imageUrl} alt='' className='productImg'></img>
                    </td>

                    <td>{product.descr}</td>
                    <td>{product.stock}</td>
                    <td>{vndFormat.format(product.price)}</td>
                    <td>
                      <button
                        className='option-btn'
                        data-bs-toggle='modal'
                        data-bs-target='#editProductModal'
                        onClick={function () {
                          setProductId(product.id);
                          getProduct(product.id);

                        }}
                      >
                        <i className='fa-solid fa-pen-to-square'></i>
                      </button>

                      <button
                        className='option-btn'
                        onClick={function () {
                          Swal.fire({
                            title: `B???n c?? ch???c mu???n x??a ${product.productName} ch??????`,
                            showDenyButton: true,
                            confirmButtonText: 'X??a',
                            denyButtonText: `????ng`,
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deletePro(product.id);
                              Swal.fire({
                                title: `???? x??a ${product.productName}`,
                                icon: 'success',
                              });
                            }
                          });
                        }}
                      >
                        <i className='fa-solid fa-trash text-danger'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- Modal add product --> */}
      <div className='modal fade' id='addProductModal'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='modal-addEditProduct-title'>
                Th??m S???n Ph???m
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='row'>
                  <div className='col'>
                    <div>
                      <label>H??nh ???nh</label>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {/*  */}
                        {/*  */}
                        <input
                        type='file'
                        ref={imageUploader}

                        onChange= {(e) =>{
                          changeFile(e)
                          handleImageUpload(e);
                        }}
                        hidden
                        
                      />
                      <div
                        style={{
                          height: '10rem',
                          width: '10rem',
                          border: '1px dashed black',
                          borderRadius: '20px',
                        }}
                        onClick={() => imageUploader.current.click()}
                      >
                        <img
                          ref={uploadedImage}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                          }}
                          alt=''
                        />
                      </div>
                        Click to upload Image
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div>
                      <label name='productType' htmlFor='productType'>
                        Lo???i S???n Ph???m
                      </label>
                      <select
                        className='form-select'
                        value={productType}
                        id='productType'
                        onChange={(e) => setProductType(e.target.value)}
                      >
                        <option value='1'>Nam</option>
                        <option value='2'>N???</option>
                        <option value='3'>Tr??? em</option>
                        <option value='4'>Tr??? S?? Sinh</option>
                      </select>
                    </div>
                    <div className='mt-3'>
                      <label name='productName' htmlFor='productName'>
                        T??n S???n Ph???m
                      </label>
                      <input
                        type='text'
                        id='productName'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    <div className='mt-2'>
                      <label name='productPrice' htmlFor='productPrice'>
                        Gi??
                      </label>
                      <input
                        type='number'
                        id='productPrice'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mt-2'>
                      <label name='productDescr' htmlFor='productDescr'>
                        M?? t???
                      </label>
                      <textarea
                        type='text'
                        id='productDescr'
                        rows='5'
                        value={productDescr}
                        onChange={(e) => setProductDescr(e.target.value)}
                      ></textarea>
                    </div>

                    <div className='mt-2'>
                      <label name='productNum' htmlFor='productNum'>
                        S??? l?????ng
                      </label>
                      <input
                        type='number'
                        id='productNum'
                        min='1'
                        value={productNum}
                        onChange={(e) => setProductNum(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                ????ng
              </button>
              <button
                type='button'
                className='btn btn-success'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={addnewProduct}
              >
                Th??m
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal EDIT product */}
      <div className='modal fade' id='editProductModal'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>C???p nh???t th??ng tin s???n ph???m</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col'>
                  <div>
                    <label>H??nh ???nh</label>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                
                      <input
                        id='proImgUpdate'
                        type='file'
                        onChange= {(e) =>{
                          changeFile(e)
                          handleImageChange(e)
                        }}
                        ref={imageChanger}
                        hidden
                        
                      />
                      <div
                        style={{
                          height: '10rem',
                          width: '10rem',
                          border: '1px dashed black',
                          borderRadius: '20px',
                        }}
                        onClick={() => imageChanger.current.click()}
                      >
                        <img
                          ref={changedImage}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                          }}
                          
                          alt=''
                        />
                      </div>
                
                      Click to upload Image
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div>
                    <label className='fw-bold'>M?? s???n ph???m: </label>
                    <label className='' id='productId'></label>
                  </div>
                  <div className='mt-3'>
                    <label className='d-block fw-bold'>T??n S???n Ph???m</label>
                    <input className='w-75' id='productNameEdit'></input>
                  </div>
                  <div className='mt-3'>
                    <label className='d-block fw-bold'>Gi??</label>
                    <input className='w-75' id='productPriceEdit'></input>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <label className='d-block fw-bold'>M?? t???</label>
                    <textarea
                      className='w-75'
                      id='productDescrEdit'
                      rows='5'
                    ></textarea>
                  </div>
                  <div>
                    <label className='d-block fw-bold'>S??? L?????ng</label>
                    <input className='w-75' id='productNumEdit'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                ????ng
              </button>
              <button
                type='button'
                className='btn btn-success'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={function (e) {
                  updatePro(productId);
                }}
              >
                C???p nh???t
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
