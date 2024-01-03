package com.Gandro.primerospasos.Appp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import com.Gandro.primerospasos.R

class ResoltActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_resolt)
        val tvResult = findViewById<TextView>(R.id.tvResult)
        val name: String = intent.extras?.getString("Extra_Name").orEmpty()
        tvResult.text = "Hola $name"
    }
}