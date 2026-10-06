  
      const swiper = new Swiper('.mySwiper', {
        loop:true,
        speed:1000,
        effect:"slide",
        autoplay:{
            delay:2000,
            disableOnInteraction:false,
        }
      });

     function showMenu(){
       document.querySelector('ul#nav-main').classList.toggle('show')

       document.querySelector('#open-close-menu i').classList.toggle('fa-bars')
     }


     let Customers=[
      {
        user_image:'image/customer.png',
        user_name:'مسعود احمدی',
        user_comment:' غذای درجه یک و محیطی فوق العاده دنج و زیبا لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک'
      },
       {
        user_image:'image/customer.png',
        user_name:' خانم اکبری',
        user_comment:' غذای درجه یک و محیطی فوق العاده دنج و زیبا لورم ایپسوم  سادگی نامفهوم   از صنعت چاپ و با استفاده از طراحان گرافیک و با استفاده از طراحان گرافی'
      },
      {
        user_image:'image/customer.png',
        user_name:' میلاد تستر',
        user_comment:' غذای درجه یک و محیطی فوق العاده دنج و زیبا لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت ...'
      }
     ];
     $(function(){
       let currentIndex=0
       $('#custom-btn .fa-solid').click(function(){
         if($(this).is('.fa-angle-right')){
          currentIndex++
          if(currentIndex>Customers.length-1){
            currentIndex=0
          }
         }
         else{
          currentIndex--
          if(currentIndex<0){
            currentIndex=Customers.length-1
          }
         }
         changePerson(currentIndex)
       })
       setInterval(function(){
         currentIndex++
          if(currentIndex>Customers.length-1){
            currentIndex=0
          }
          changePerson(currentIndex);

       },3000)

       function changePerson(index){
         let person  = Customers[index];

         $('#user_name').text(person.user_name)
         $('#user_comment').text(person.user_comment)
         $('#user_image').attr( 'src',person.user_image)
       }

     })