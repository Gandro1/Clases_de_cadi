package com.Gandro.primerospasos.Appp.IMCCalculater

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.Gandro.primerospasos.Appp.IMCCalculater.IMCCalculaitorActivity.Companion.IMC_RESULT
import com.Gandro.primerospasos.R

class ResultIMCActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result_imcactivity)
        val result:Double = intent.extras?.getDouble(IMC_RESULT) ?: -1.0
    }
}