"use client";
import { BASE_URL } from "@/lib/constants";
import { productType } from "@/lib/definitions";
import { Dropdown, DropdownItem, Modal } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzIxMTI2LCJpYXQiOjE3MTI1NjExMjYsImp0aSI6IjE1MmQ2MTMxMDM5MTQyYmZhNmUzZGE2NTBhZjI1ZmRiIiwidXNlcl9pZCI6MjR9.qljHJG-4aktQcUraUA2DL2MhotAOUYnsVA-Cunrkl40";

function deleteProduct(id: number | string) {
  fetch(`${BASE_URL}${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
}

export default function UserTable() {
  const [productDetails, setProductDetails] = useState<productType>();
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpate, setOpenModalUpate] = useState(false);
  const [getProduct, setProduct] = useState([]);

  const fieldStyle = "border border-gray-300 rounded-md";
  async function fetchData() {
    const data = await fetch(`${BASE_URL}/api/products?page_size=100`);
    const res = await data.json();
    setProduct(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const columns: TableColumn<productType>[] = [
    {
      name: "ID",
      selector: (row) => row.id || "",
    },
    {
      name: "Seller",
      selector: (row) => row.seller || "",
    },
    {
      name: "Name",
      selector: (row) => row.name || "",
    },
    {
      name: "Category",
      selector: (row) => row.category || "",
    },
    {
      name: "Image",
      selector: (row): any => (
        <img src={row.image} width={100} height={100} alt="user" />
      ),
    },
    {
      name: "Action",
      selector: (row): any => {
        const handleView = (product: productType) => {
          setProductDetails(product);
          setOpenModal(true);
        };
        const handleUpdate = () => {
          setOpenModalUpate(true);
        };
        return (
          <div>
            <Dropdown label="" inline>
              <DropdownItem className="text-primaryColor">
                <button
                  className="text-primaryColor "
                  onClick={() => handleView(row)}
                >
                  Product View
                </button>
              </DropdownItem>
              <DropdownItem className="text-primaryColor">
                <button
                  className="text-primaryColor "
                  onClick={() => handleUpdate()}
                >
                  Edit
                </button>
              </DropdownItem>
              <DropdownItem className="text-red-600">
                <button
                  onClick={() => {
                    deleteProduct(row.id || "");
                  }}
                >
                  Delete
                </button>
              </DropdownItem>
            </Dropdown>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {/* view product */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="text-2xl"> Product Details</p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex gap-10">
              <Image
                src={productDetails?.image ?? ""}
                alt={productDetails?.name || "UNKNOWN"}
                width={250}
                height={250}
                className="rounded-lg "
              />
              <div>
                <p className="text-lg font-bold">{productDetails?.name}</p>
                <p className="text-lg font-medium text-primaryColor">
                  ${productDetails?.price}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {productDetails?.desc || "No description available"}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* update product */}
      <Modal
        dismissible
        show={openModalUpate}
        onClose={() => setOpenModalUpate(false)}
      >
        <Modal.Header>
          <p className="text-2xl"> Product Details</p>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              onSubmit={(values: any, { setSubmitting, resetForm }) => {
                console.log(values);
                const formData = new FormData();
                formData.append("image", values.image);
                // handleCreateProduct(values, { image: formData });
                setSubmitting(false);
                resetForm();
              }}
              initialValues={{
                category: {
                  name: " ",
                  icon: " ",
                },
                name: "",
                desc: "",
                image: undefined,
                price: 0,
                quantity: 0,
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="flex m-[30px] flex-col gap-4">
                  {/* name */}
                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="name">Product Name: </label>
                    <Field
                      placeholder="T-shirt"
                      className={fieldStyle}
                      name="name"
                      type="text"
                    />
                  </div>
                  {/* category */}
                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="category.name">Category Name</label>
                    <Field
                      id="category.name"
                      placeholder="T-shirt"
                      className={fieldStyle}
                      name="category.name"
                      type="text"
                    />
                  </div>
                  {/* icon */}

                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="category.name">Category Icon</label>
                    <Field
                      type="text"
                      id="category.icon"
                      name="category.icon"
                      className={fieldStyle}
                    />
                  </div>
                  {/* description */}
                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="desc">Description: </label>
                    <Field
                      placeholder="This is a t-shirt"
                      className={fieldStyle}
                      name="desc"
                      type="text"
                    />
                  </div>
                  {/* price */}
                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="price">Price: </label>
                    <Field
                      placeholder="100"
                      className={fieldStyle}
                      name="price"
                      type="number"
                    />
                  </div>
                  {/* quantity */}
                  <div className="flex flex-col gap-2 text-primaryColor">
                    <label htmlFor="price">Quantity: </label>
                    <Field
                      placeholder="1"
                      className={fieldStyle}
                      name="quantity"
                      type="number"
                    />

                    {/* Image  */}
                    {/* <div>
                      <Field
                        name="image"
                        className={fieldStyle}
                        type="file"
                        title="Select a file"
                        setFieldValue={setFieldValue} // Set Formik value
                        component={CustomInput} // component prop used to render the custom input
                      />
                      <ErrorMessage name="image">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div> */}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-pink-600 text-white rounded-md"
                      disabled={isSubmitting}
                    >
                      Create
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable
        columns={columns}
        data={getProduct}
        fixedHeader={true}
        fixedHeaderScrollHeight="600px"
        selectableRows
        pagination
        subHeader
      />
    </div>
  );
}
