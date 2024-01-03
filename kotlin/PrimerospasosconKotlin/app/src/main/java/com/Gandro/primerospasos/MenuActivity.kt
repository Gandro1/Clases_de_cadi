package com.Gandro.primerospasos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.appcompat.widget.AppCompatButton
import com.Gandro.primerospasos.Appp.FirstActivity
import com.Gandro.primerospasos.Appp.IMCCalculater.IMCCalculaitorActivity

class MenuActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_menu)
        val btnSaludApp = findViewById<AppCompatButton>(R.id.btnSaludApp)
        val btnIMCApp = findViewById<AppCompatButton>(R.id.btnIMCApp)

        btnSaludApp.setOnClickListener { navigateToSaludApp() }
        btnIMCApp.setOnClickListener { navigateToImcApp() }
    }

    private fun navigateToImcApp() {
        val intent = Intent(this, IMCCalculaitorActivity::class.java)
        startActivity(intent)
    }

    private fun navigateToSaludApp() {
        val intent = Intent(this, FirstActivity::class.java)
        startActivity(intent)
    }
}