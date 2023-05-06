#include <Adafruit_LiquidCrystal.h>
#define sensorEntrada 2
#define sensorSaida 4

int pessoasDentro = 10;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
    lcd_1.begin(16, 2);

    lcd_1.print("Start");
    delay(500);
    lcd_1.clear();

    Serial.begin(9600);
    pinMode(sensorEntrada, INPUT_PULLUP);
    pinMode(sensorSaida, INPUT_PULLUP);
    pinMode(3, OUTPUT);
    lcd_1.print("Total de Aluno:");
}

void loop()
{
    if (digitalRead(sensorEntrada) == 0)
    {
        pessoasDentro++;
        lcd_1.setCursor(0, 0);
        lcd_1.clear();
        Serial.print("chegou alguem\n");
        lcd_1.setCursor(0, 0);
        lcd_1.print("Entrou: 1");
        lcd_1.setCursor(7, 1);
        lcd_1.print(pessoasDentro);
        lcd_1.print("/55");
        lcd_1.setBacklight(1);

        delay(500);
        lcd_1.setCursor(0, 0);
        lcd_1.clear();
        lcd_1.print("Total de Aluno:");
        lcd_1.setCursor(7, 1);
        lcd_1.print(pessoasDentro);
        lcd_1.print("/55");
        lcd_1.setBacklight(1);
    }
    if (digitalRead(sensorSaida) == 0)
    {
        pessoasDentro--;
        lcd_1.setCursor(0, 0);
        lcd_1.clear();
        Serial.print("saiu alguem\n");
        lcd_1.setCursor(0, 0);
        lcd_1.print("Saiu: 1");
        lcd_1.setCursor(7, 1);
        lcd_1.print(pessoasDentro);
        lcd_1.print("/55");
        lcd_1.setBacklight(1);

        delay(500);
        lcd_1.setCursor(0, 0);
        lcd_1.clear();
        lcd_1.print("Total de Aluno:");
        lcd_1.setCursor(7, 1);
        lcd_1.print(pessoasDentro);
        lcd_1.print("/55");
        lcd_1.setBacklight(1);
    }

    delay(500);
    lcd_1.setBacklight(0);
}