package com.Gandro.primerospasos.Appp

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import com.Gandro.primerospasos.R

class FirstActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_first)
        val btnClick = findViewById<AppCompatButton>(R.id.btnClick)
        val etName = findViewById<AppCompatEditText>(R.id.etName)


        btnClick.setOnClickListener{
            val name = etName.text.toString()

            if (name.isNotEmpty()) {
                val intent = Intent(this, ResoltActivity::class.java)
                intent.putExtra("Extra_Name", name)
                startActivity(intent)
            }
        }

    }
}