let flipTimer ="";
$('.card').on('click', function() {
    $(this).toggleClass('flipped');
});
Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        // 隨機選擇一個索引
        const j = Math.floor(Math.random() * (i + 1));
        // 交換元素
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this; // 返回打亂後的陣列
}
$(document).ready(function() {

    let isappear = false; 

    const successSound = new Audio('success.mp3');
    const failSound = new Audio('fail.mp3');
    let wait_second = 10;
    let picture_img = 0;
    let timerInterval;
    let elapsedTime = 0;
    let rows = 4; // 初始行數
    let cols = 4; // 初始列數
    let index = 0;
    let win = 0;
    timerInterval = setInterval(function() {
        elapsedTime++;
        if (wait_second - elapsedTime > 0) {
            $('.sec').text(wait_second - elapsedTime);
        }else if(wait_second - elapsedTime == 0){
            $('.sec').text('');
        }
    }, 1000);
    let front_img = [

    ];
    let front_img1 = [
        `https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800`,
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         //上 8
        "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/65289/polar-bear-bear-teddy-sleep-65289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/110320/pexels-photo-110320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    let front_img2 = [
        `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg`,
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        //上8
        "https://images.pexels.com/photos/2439595/pexels-photo-2439595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/966397/pexels-photo-966397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/210538/pexels-photo-210538.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    ];

    front_img = front_img1.slice(0,rows*cols/2);
    front_img.forEach(ele=>{
        front_img.push(ele);
    })
    const $main = $('.main'); // 主容器
    $('.maintitle').on('click',function(){
        win= 0;
        elapsedTime=0;
        $main.empty();
        let row_col = $('#grids').val().split(' '); // 确保值被拆分为数组
        rows = parseInt(row_col[0]); // 确保转换为数字
        cols = parseInt(row_col[1]); // 确保转换为数字
        if(picture_img==1){
            picture_img = 0;
            newgame()
        }else if(picture_img==0){
            picture_img=1;
            newgame()
        }
        clearsidebar2()
        // 預設開啟卡片
        $('.card').addClass('flipped'); // 假設這會顯示正面
        // 設置 10 秒後翻轉卡片
        clearTimeout(flipTimer);
        flipTimer = setTimeout(() => {
            $('.card').removeClass('disabled');
            $('.card').toggleClass('flipped'); // 翻轉卡片
        }, wait_second*1000); // 10秒（wait_second毫秒）
    })
    front_img.shuffle();
    front_img.shuffle();
    const $sidebar2 = $('.sidebar2');
    const clearsidebar2 = () => {
        $sidebar2.empty();
        let index = 0;
        while (index < Math.floor(rows * cols / 2)) {
            $sidebar2.append(`
                <div class="imglink" id="${index + 1}">
                    <input type="text" value="${picture_img == 1 ? front_img2[index] : front_img1[index]}" class="inp">
                </div>
            `);
            index++;
        }
        $('.inp').on('change', function() {
            $main.empty();
            let front_imgArray;
        
            // 根據 picture_img 的值決定使用哪個陣列
            if (picture_img == 1) {
                front_imgArray = $('.inp').map(function() {
                    return $(this).val(); // 取得每個 .inp 的值
                }).get();
                front_img2 = front_imgArray;
            } else {
                front_imgArray = $('.inp').map(function() {
                    return $(this).val(); // 取得每個 .inp 的值
                }).get();
                front_img1 = front_imgArray;
            }
            newgame()
        });
    };
    // 預設新增 sidebar2
    while(index++ <= Math.floor(rows * cols / 2) -1){
        $sidebar2.append(`
            <div class="imglink" id="${index}">
                <input type="text" value="${picture_img==1 ? front_img2[index-1]:front_img1[index-1]}" class="inp">
            </div>
        `)
    }
    // ----------------
    $('.inp').on('change', function() {
        $main.empty();
        let front_imgArray;
    
        // 根據 picture_img 的值決定使用哪個陣列
        if (picture_img == 1) {
            front_imgArray = $('.inp').map(function() {
                return $(this).val(); // 取得每個 .inp 的值
            }).get();
            front_img2 = front_imgArray;
        } else {
            front_imgArray = $('.inp').map(function() {
                return $(this).val(); // 取得每個 .inp 的值
            }).get();
            front_img1 = front_imgArray;
        }
        // 清除 sidebar 並更新
        clearsidebar2();
        renderGrid();
    });
    function renderGrid() {
        $main.empty(); // 清空主容器
        for (let i = 0; i < rows; i++) {
            const $row = $('<div>').addClass(`row rol-margin rol${i}`);
            for (let j = 0; j < cols; j++) {
                const $card = $(`
                    <div class="card col pic col${j}">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="https://picsum.photos/200" alt="Front Image">
                            </div>
                            <div class="card-back">
                                <img src="${front_img[i*cols+j]}" alt="${front_img[i*cols+j]}" style="width:100%;height:100%;object-fit:cover;"> 
                            </div>
                        </div>
                    </div>
                `);
                $row.append($card);
            }
            $main.append($row);
        }
        let flippedCards = []; // 用於存儲翻轉的卡片

        // 點擊卡片翻面
        $('.card').on('click', function() {
            const $card = $(this);
            if($(this).hasClass('success')){
                return
            }
            if (flippedCards.length <= 1) 
                $card.toggleClass('flipped');
            // 獲取翻轉的卡片
            if ($card.hasClass('flipped')) {
                flippedCards.push($card); // 將翻轉的卡片添加到數組中
            } else {
                // 如果卡片翻回去，從數組中移除
                flippedCards = flippedCards.filter(card => card[0] !== $card[0]);
            }
        
            // 當翻轉的卡片數量達到2張時檢查
            if (flippedCards.length === 2) {
                const imgUrl1 = flippedCards[0].find('.card-back img').attr('src');
                const imgUrl2 = flippedCards[1].find('.card-back img').attr('src');
                // 判斷兩個圖片的 URL 是否相同
                if (imgUrl1 === imgUrl2) {
                    // 如果相同，添加 success 類
                    flippedCards.forEach(card => card.addClass('success'));
                    successSound.pause();
                    successSound.currentTime = 0;
                    successSound.play()

                    if (isappear) {
                        flippedCards.forEach(card => {
                            $(card).css('visibility', 'hidden');
                        });
                    } else {
                        flippedCards.forEach(card => {
                            $(card).css('visibility', 'visible');
                        });
                    }
                    
                    
                    win++;
                    if(win == rows*cols/2){
                        Swal.fire({
                            title: "勝利",
                            text: `你花了${elapsedTime-10}秒`,
                            icon: "success",
                            confirmButtonText: '確定'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                newgame()
                            }
                          });
                    }
                } else {
                    failSound.pause();
                    failSound.currentTime = 0;
                    failSound.play()
                    $('.card').addClass('disabled');
                    setTimeout(() => {
                        $('.card').not('.success').removeClass('flipped');
                        $('.card').removeClass('disabled');
                    }, 500); // 延遲1秒翻回去
                }
                // 清空翻轉卡片數組
                flippedCards = [];
            }
        });

    }

    // 初始化網格
    renderGrid();
    $('.card').addClass('disabled');

    // 點擊 .btn2 增加 X 軸列數
    $('.btn2').on('click', function() {
        cols++;
        $sidebar2.empty();
        index=0;
        newgame()
    });
    const newgame = () =>{
        $main.empty()
        if(picture_img==1){
            front_img = front_img2.slice(0,rows*cols/2);
            front_img.forEach(ele=>{
                front_img.push(ele);
            })
        }else {
            front_img = front_img1.slice(0,rows*cols/2);
            front_img.forEach(ele=>{
                front_img.push(ele);
            })
        }
        front_img.shuffle(); // 如果你有 shuffle 方法
        front_img.shuffle(); // 如果你有 shuffle 方法
        clearsidebar2();
        renderGrid();
        win= 0;
        elapsedTime=0;
        $('.card').addClass('disabled');
        // 預設開啟卡片
        $('.card').addClass('flipped'); // 假設這會顯示正面
        // 設置 10 秒後翻轉卡片
        clearTimeout(flipTimer)
        flipTimer= setTimeout(() => {
            $('.card').toggleClass('flipped'); // 翻轉卡片
            $('.card').removeClass('disabled');
        }, wait_second*1000); // 10秒（wait_second毫秒）
    }
    // 點擊 .btn3 增加 Y 軸行數
    $('.btn3').on('click', function() {
        rows++;
        $sidebar2.empty();
        index=0;
        newgame()
    });
    // 點擊 .btn4 減少 X 軸列數
    $('.btn4').on('click', function() {
        if (cols > 2) {
            cols--;
            $sidebar2.empty();
            index=0;
            newgame()
        }
    });
    // 點擊 .btn5 減少 Y 軸行數
    $('.btn5').on('click', function() {
        if (rows > 2) {
            rows--;
            $sidebar2.empty();
            index=0;
            newgame()
        }
    });
    //重製成 4*4
    $('.restart').on('click',()=>{
        newgame()
    })
    $('.btn1').on('click', function() {
        $('.sidebar2').toggle(); // 切換顯示和隱藏
    });
    $('.btn7').on('click',function(){
        $('.card').addClass('flipped')
    })
    $('.btn8').on('click',function(){
        $('.card').removeClass('flipped')
    })

    // 預設開啟卡片
    $('.card').addClass('flipped'); // 假設這會顯示正面

    // 設置 10 秒後翻轉卡片
    clearTimeout(flipTimer);
    flipTimer= setTimeout(() => {
        $('.card').removeClass('disabled');
        $('.card').toggleClass('flipped'); // 翻轉卡片
    }, wait_second*1000); // 10秒（wait_second毫秒）
    $('#grids').on('change', function() {
        let row_col = $(this).val().split(' '); // 确保值被拆分为数组
        rows = parseInt(row_col[0]); // 确保转换为数字
        cols = parseInt(row_col[1]); // 确保转换为数字
        newgame();
    });
    $('#waitsecond').on('change', function() {
        wait_second = $(this).val();
        newgame();
    });


    $('#appear_bar').on('click',function(){
        isappear = !isappear;
        $(this).html(`${!isappear ? "不":""}顯示已完成的圖片<i class="fa-solid fa-bell"></i>`);
        $(this).toggleClass('isappear');
    })
});
