// import type { APIRoute } from "astro"
// import {Resend} from "resend";
// const resend = new Resend (import.meta.env.RESEND_API_KEY)
// export const GET: APIRoute=async ({params, request})=> {
// const send= await resend.emails.send({
// from:"daniyalahs8@gmail.com",
// to:"daniyalahs8@gmail.com",
// subject :"Sample Subject",
// html:"<p>Hi</p>",
// text:"HIII"
// })
// if (send.data){
//     return new Response(
//         JSON.stringify({
//             message: send.data,
//         }),
//         {
//             status:200,
//             statusText:"Ok"
//         }
//     );
// }
// else (send.error)
// {
//     return new Response(
//         JSON.stringify({
//             message: send.error,
//         }),
//         {
//             status:500,
//             statusText:"ERRRORORO"
//         }
//     );
// }


//     return new Response(
//       JSON.stringify({
//         name: 'Astro',
//         url: 'https://astro.build/'
//       })
//     )
//   }