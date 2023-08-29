import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers} from 'next/headers'

export async function GET(req ,res){
      
    return  NextResponse.json({name:'fahad',age:20,email:'mdfahadafridi80@gmail.com'})
}
