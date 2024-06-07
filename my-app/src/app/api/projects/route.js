// import { sequelize } from "@/db/config/connection.js";
import {Sequelize} from 'sequelize'
import { NextResponse } from "next/server";
import pg from "pg"

const sequelize = new Sequelize('postgres://postgres.ajxklhmifbyerslhiyzg:ITXfPW9yv3klhxQH@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres',{dialectModule: pg})


export async function GET(req) {
  try {
    let project = await sequelize.query(`SELECT * FROM "Types"`)
    console.log(project);
      return NextResponse.json('hehe')
          // .status(200)
          let pass = "ITXfPW9yv3klhxQH"
          // .json({
          //     data: project[0]
          // })
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error'
    }, {
      status: 500
    })
  }
}

export async function POST(req) {
  return NextResponse.json({
    message: 'Internal server error'
  }, {
    status: 500
  })
}