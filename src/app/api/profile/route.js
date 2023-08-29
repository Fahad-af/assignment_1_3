import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req,res){
     
      return NextResponse.json({name:"afridi",age:25,email:'mdfahadafridi80@gmail.com'},
      {
            status:200,
            headers:{
                  'Set-Cookie':'theme=dark;path=/'
            }
      })
}