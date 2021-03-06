import React, { Component } from 'react';
import dl from './db.json';

// Call API
// var animals = [
//     {
//         "id": "1",
//         "image": "./image/lion.jpg",
//         "name": "Lion",
//         "description": "Sư tử là một trong những đại miêu trong họ mèo và là một loài của họ báo. Lời vật này còn được gọi bằng cái tên như là “Vua của các loài thú”. Bởi lẽ vì nó có một bộ lông màu vàng óng, đôi mắt sắc rất đẹp. Sư tử có bờm to, nhìn rất dũng mãnh và uy nghiêm, xứng đáng với cái tên “Vua của muôn loài” mà mọi người đã đặt."
//     },
//     {
//         "id": "2",
//         "image": "./image/gorilla.jfif",
//         "name": "Gorilla",
//         "description": "Tinh tinh (Pan troglodytes), còn gọi là hắc tinh tinh, tinh tinh thông thường, là một loài trong chi Tinh tinh (Pan), Họ Người, bộ Linh trưởng, được Blumenbach mô tả vào năm 1775. Tinh tinh thường sinh sống ở Tây và Trung Phi. Họ hàng gần nhất với nó là bonobo (Pan paniscus), được tìm thấy tại các cánh rừng của Cộng hòa dân chủ Congo. Ranh giới địa lý giữa hai loài này là sông Congo."
//     },
//     {
//         "id": "3",
//         "image": "./image/elephant.jfif",
//         "name": "Elephant",
//         "description": "Voi là động vật có vú thuộc họ Elephantidae (cận ngành) và là động vật trên cạn lớn nhất hiện nay. Ba loài hiện được công nhận: voi đồng cỏ châu Phi, voi rừng châu Phi và voi châu Á."
//     },
//     {
//         "id": "4",
//         "image": "./image/dolphin.jfif",
//         "name": "Dolphin",
//         "description": "Cá heo là loài cá thông minh và hiền lành sống trong đại dương. Khi nhắc đến cá heo các bạn sẽ nghĩ ngay đến những màn biểu diễn xiếc điêu luyện."
//     },
//     {
//         "id": "5",
//         "image": "./image/Arctic_fox.jpg",
//         "name": "Arctic fox",
//         "description": "Cáo tuyết Bắc Cực (Vulpes lagopus), còn có tên cáo trắng, cáo tuyết hay cáo Bắc Cực, là một loài cáo nhỏ có nguồn gốc từ vùng Bắc Cực ở Bắc bán cầu và thường sống tại quần xã ở đài nguyên Bắc Cực. Loài cáo này thích nghi tốt với môi trường lạnh. Chúng sở hữu bộ lông dày có màu nâu vào mùa hạ và chuyển sang màu trắng vào mùa đông."
//     },
//     {
//         "id": "6",
//         "image": "./image/penguin.jfif",
//         "name": "Penguin",
//         "description": "Chim cánh cụt là một nhóm chim không bay dưới nước . Chúng hầu như chỉ sống ở Nam bán cầu : chỉ có một loài, chim cánh cụt Galápagos , được tìm thấy ở phía bắc Xích đạo. Thích nghi cao với cuộc sống ở dưới nước, chim cánh cụt có bộ lông đen và trắng bóng mờ và chân chèo để bơi. Hầu hết chim cánh cụt ăn nhuyễn thể , cá , mực và các dạng sinh vật biển khác mà chúng bắt được khi bơi dưới nước. Họ dành khoảng một nửa cuộc đời trên cạn và nửa còn lại ở biển."
//     },
//     {
//         "id": "7",
//         "image": "./image/red_panda.jfif",
//         "name": "Red panda",
//         "description": "Gấu trúc đỏ ( Ailurus fulgens ), còn được gọi là gấu trúc nhỏ , là một loài động vật có vú nhỏ có nguồn gốc từ phía đông Himalayas và tây nam Trung Quốc . Nó có bộ lông màu nâu đỏ dày đặc, tai có viền trắng, mõm chủ yếu là màu trắng và một chiếc đuôi vòng. Chiều dài từ đầu đến thân của nó là 51–63,5 cm  với đuôi 28–48,5 cm  và nặng từ 3,2 đến 15 kg. Nó thích nghi tốt với việc leo trèo do có các khớp linh hoạt và các móng vuốt cong bán rút."
//     },
//     {
//         "id": "8",
//         "image": "./image/mandarinfish.jpg",
//         "name": "Mandarinfish",
//         "description": "Cá trạng nguyên sinh sống cạnh các rạn san hô tại vùng phía Tây Thái Bình Dương, gần Úc, Đài Loan và Phillippines. Được mệnh danh là loài cá đẹp nhất thế giới với bộ cánh vô cùng sống động giống như bộ quần áo của các tân trạng nguyên khi lên nhận phong chức. Cá trạng nguyên và những anh em họ của chúng là những loài duy nhất được nhận biết bởi màu xanh lam hình thành bởi các sắc tố tế bào. Có kích thước dài khoảng 6cm, thức ăn của chúng là những loài động vật không xương sống, động vật giáp xác nhỏ."
//     },
//     {
//         "id": "9",
//         "image": "./image/COLOBUS_ZANIBAR.jpg",
//         "name": "COLOBUS ZANIBAR",
//         "description": "Chỉ sống ở vùng cây bụi ven biển trên hòn đảo Zanzibar ngoài khơi bờ biển Tanzania. Chúng là một trong những loài có nguy cơ tuyệt chủng, số lượng hiện nay chỉ còn khoảng 3000 cá thể trong tự nhiên. Người Zanibar có một cái nhìn tiêu cực với loài khỉ này, họ gọi chúng là khỉ độc vì mùi hương không bình thường của chúng. Chúng sống theo bầy đàn số lượng có thể lên đến 50 cá thể. Khỉ đỏ Colobus ăn lá, hạt và hoa mà nó tìm thấy trong các khu rừng, khu vực ven biển và đầm lầy, đặc biệt không ăn những loại trái cây chín vì không thể phân giải đường có trong chúng."
//     },
//     {
//         "id": "10",
//         "image": "./image/caracal.jpg",
//         "name": "Caracal",
//         "description": "Còn được gọi là mãn rừng, loài linh miêu tai đen có kích thước khoảng 1m, phân bố khắp châu Phi, Trung Đông, Pakistan và Ấn Độ. Môi trường sống chính của chúng là thảo nguyên khô và bán sa mạc, nhưng chúng cũng sống ở rừng, thảo nguyên và rừng cây bụi. Đôi tai dài và linh hoạt có khả năng nghe những âm thanh nhỏ nhất kết hợp với đôi chân sau chắc khỏe chúng có thể săn mồi một cách dễ dàng. Thức ăn của chúng là những loài động vật có vú nhỏ, linh dương và các loài bò sát."
//     },
//     {
//         "id": "11",
//         "image": "./image/EUPETOMENA_MACROURA.jpg",
//         "name": "EUPETOMENA MACROURA",
//         "description": "Là một loài thuộc họ chim ruồi, loài chim có tên khoa học Eupetomena macroura sống ở vùng phía đông và trung tâm Nam Mỹ. Chúng ưa thích những môi trường mở có không gian thoáng đãng, vùng ven biển hay các khu vườn và đặc biệt tránh những khu rừng nhiệt đới. Đặc điểm nhận dạng của chúng với những loài chim ruồi khác là bộ lông sặc sỡ gồm màu xanh lá cây, xanh dương và tím cùng với chiếc đuôi được xẻ dài."
//     },
//     {
//         "id": "12",
//         "image": "./image/tiger.jpg",
//         "name": "TIGER",
//         "description": "Hổ là loài có kích thước lớn nhất trong họ nhà Mèo. Chúng có thể dài đến 3,3m và nặng trên 300kg. Tuổi thọ tối đa của hổ là 26 năm nhưng trong tình trạng săn bắt hiện nay thì thời gian sống của hổ đã giảm đi đáng kể. Trên thế giới hiện còn khoảng 4000 cá thể hổ, gồm 6 loài đang sống trong môi trường tự nhiên và nuôi nhốt, trong đó hổ Bengal là loài phổ biến nhất và hổ Siberia là loài lớn nhất. Chúng tập trung chủ yếu trong những khu vực cây cối rậm rạp ở Ấn Độ, Đông Nam Á và Siberia. Những sọc vằn trên bộ lông của hổ giúp chúng ẩn nấp trong môi trường tự nhiên dễ dàng."
//     },
//     {
//         "id": "13",
//         "image": "./image/Madagasca.jpg",
//         "name": "MADAGASCA",
//         "description": "Loài bướm đêm hoàng hôn Madagasca là loài bướm có màu sắc vô cùng độc đáo. Màu sắc cân đối trên đôi cánh của chúng là do hiện tượng quang học và tán xạ ánh sáng, chúng sử dụng màu sắc của mình để cảnh cáo kẻ thù. Sải cánh của chúng dài đến 11cm, nhộng của sâu bướm trông như một xác chết và người Malagasy tin sâu bướm nổi đại diện cho linh hồn của tổ tiên tăng chết của họ."
//     },
//     {
//         "id": "14",
//         "image": "./image/African_buffalo.jpg",
//         "name": "AFRICAN BUFFALO",
//         "description": "Trâu rừng châu Phi là một loài lớn thuộc họ Trâu bò ở Châu Phi Loài trâu này không có họ hàng gần với trâu nước hoang dã Châu Á lớn hơn chút ít, tổ tiên của loài vẫn còn chưa rõ ràng. Trâu rừng châu Phi có khoảng 900.000 con, tìm thấy ở vùng cận Sahara châu Phi, là loài khá hiền lành, thường đi thành bầy lớn, kiếm cỏ vào buổi sáng sớm và chiều muộn hoặc tìm nơi có nước để uống. Nhưng nếu một con bị đe dọa, chúng sẽ trở nên vô cùng hung dữ. Trâu châu Phi được xem là một loài động vật rất dữ tợn và hung hăng, có thể chạy với vận tốc từ 50–60 km/h. Chúng được cho là đã húc và giết chết hơn 200 người mỗi năm. Loài vật này đã giết số lượng thợ săn trên lục địa nhiều hơn bất kì loài nào khác. Con trâu rừng trưởng thành có thể cao hơn 1,8 mét và nặng gần 1 tấn. Khi truy đuổi con mồi nó có thể chạy với tốc độ 60km/h và không ngừng lại ngay cả khi bị thương. Chúng cũng không ngại ngần đối đầu với một chiếc xe đang di chuyển."
//     },

// ];


function AnimalItem({ animal }) {
    return (
        <div className="container__animal">
            <img className='container__animal-img' src={animal.image} alt="" />
            <h1 className='container__animal-h1'>{animal.name}</h1>
            <p className='container__animal-p'>{animal.description}</p>
        </div>

    )
};

class Container extends Component {
    render() {

        return (
            <div className="container">
                <div className="container__animalList">
                    {dl.map((animal) => {
                        return (
                            <AnimalItem
                                key={animal.id}
                                animal={animal}
                            />
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Container;

// key = { index }
// animal = { animal }