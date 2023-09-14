import { useState } from "react";
import { ItemProp } from "../../types/item";

const listOfCategories = [
      {
            id: 1,
            name: "Sauce & seasoning",
            value: [
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/dasida-hat-nem-vi-bo-e-500g-400x400.jpg",
                        title: "Hạt nêm vị bò (E) 500G",
                        description:
                              "Hạt nêm vị bò DASIDA chiết xuất từ thịt bò tươi ngon, dạng gói dễ sử dụng và bảo quản, đảm bảo vệ sinh an toàn thực phẩm, là loại gia vị được ưa chuộng trên nhiều nước trên thế giới.",
                        price: "115,000VND",
                  },
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/dasida-hat-nem-vi-bo-e-500g-400x400.jpg",
                        title: "Hạt nêm nghêu-sò 500G",
                        description:
                              "Là gia vị hạt nêm rất dỗi quen thuộc này không thể thiếu trong các bữa ăn hàng ngày của người Hàn. Hạt nêm nghêu sò DASIDA gói 300g đến từ thương hiệu hạt nêm DASIDA mang lại sự tiện dụng, nhanh chóng cho các bà nội trợ bận rộn mà vẫn nấu được những món ăn có hương vị biển tự nhiên.",
                        price: "150,000VND",
                  },
                  {
                        urlImage: "https://cjfoods.com.vn/storage/untitled-1-original-400x400.png",
                        title: "Xốt Ướp Thịt Bulgogi - Vị Mặn Ngọt 80G",
                        description:
                              "Xốt Bibigo là thương hiệu gia vị nêm sẵn đến từ Hàn Quốc, được nhiều người tin dùng bởi hương vị và chất lượng. Sản phẩm được làm dựa trên công thức riêng biệt, mang đến món thịt mềm, ngon ngọt tự nhiên đặc trưng của vị Bulgogi đến từ Hàn Quốc.",
                        price: "10,000VND",
                  },
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/sot-uop-bulgogi-bo-beksul-chai-290g-201911121403536208-400x400.jpg",
                        title: "(BEKSUL) Xốt ướp Bulgogi bò 290G",
                        description:
                              "Xốt Beksul là thương hiệu gia vị nêm sẵn đến từ Hàn Quốc, được nhiều người tin dùng bởi hương vị và chất lượng. Sản phẩm được làm dựa trên công thức tỷ lệ vàng, mang đến món thịt bò mềm, ngon ngọt tự nhiên đặc trưng của vị Bulgogi đến từ Hàn Quốc.",
                        price: "39,000VND",
                  },
            ]
      },
      {
            id: 2,
            name: "Flour",
            value: [
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/bot-banh-bong-lam-cookies-1kg-400x400.png",
                        title: "BỘT BÁNH BÔNG LAN & COOKIES - 1KG",
                        description:
                              "Tất cả sản phẩm từ Xe Đạp đều được đầu tư chỉnh chu từ nguồn nguyên liệu đến từng công đoạn sản xuất, từ đó mà chúng tôi tự tin mang đến những chất lượng tốt nhất cho người dùng.",
                        price: "32,000VND",
                  },
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/bot-banh-mi-400x400.png",
                        title: "BỘT BÁNH MÌ - 1KG",
                        description:
                              "Tất cả sản phẩm từ Xe Đạp đều được đầu tư chỉnh chu từ nguồn nguyên liệu đến từng công đoạn sản xuất, từ đó mà chúng tôi tự tin mang đến những chất lượng tốt nhất cho người dùng.",
                        price: "50,000VND",
                  },
            ]
      },
      {
            id: 3,
            name: "Spring roll",
            value: [
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/chagio-nhan-thit-500g-1200x1200-01-400x400.jpg",
                        title: "Chả giò Thịt 500g",
                        description:
                              "Chả Giò Bánh Tráng Cầu Tre lưu giữ hương vị truyền thống, với công thức phối trộn hiện đại từ các nguyên liệu tươi ngon cuốn trong lớp vỏ bột gạo làm nên hương vị thơm ngon hấp dẫn khó quên.",
                        price: "50,000VND",
                  },
                  {
                        urlImage: "https://cjfoods.com.vn/storage/products/chagio-chay-500g-1200x1200-06-400x400.jpg",
                        title: "Chả giò Chay 500g",
                        description:
                              "Chả Giò Bánh Tráng Cầu Tre lưu giữ hương vị truyền thống, với công thức phối trộn hiện đại từ các nguyên liệu tươi ngon cuốn trong lớp vỏ bột gạo làm nên hương vị thơm ngon hấp dẫn khó quên.",
                        price: "40,000VND",
                  },
            ]
      },
];
export default function Market() {
      const [indexItem, setIndexItem] = useState(0);

      const Item = ({ urlImage, title, description, price }: ItemProp) => {
            return (
                  <div className="border rounded p-4 my-4 shadow-md">
                        <img
                              src={urlImage}
                              alt={title}
                              className="mt-4 w-full h-64 object-contain"
                        />
                        <h4 className="text-lg font-semibold">{title}</h4>
                        <p className="text-blue-500 font-bold mt-2">{price}</p>
                  </div>
            );
      };

      return (
            <div className="w-full p-4">
                  <h3 className="font-bold text-3xl">Market</h3>
                  <div className="">
                        {listOfCategories.map((item) =>
                              <button className="bg-transparent border-[1] my-2 mr-5 border-zinc-600 font-medium focus:bg-blue-500" key={item.id} onClick={() => setIndexItem(item.id)}>{item.name}</button>
                        )}
                  </div>
                  {indexItem == 0 ?
                        (<div className="grid grid-cols-3 gap-3">
                              {listOfCategories.map((category) => (
                                    <div key={category.id}>
                                          {category.value.map((item, index) => (
                                                <Item key={index} {...item} />
                                          ))}
                                    </div>
                              ))}
                        </div>) :
                        <div className="grid grid-cols-3 gap-3">
                              {listOfCategories[indexItem - 1].value.map(item => <Item {...item} />)}
                        </div>}
            </div>
      )
}
