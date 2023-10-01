use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {}

#[wasm_bindgen]
pub fn unlock_vault(password: &str) -> String {
    if let Ok(password) = password.parse::<i128>() {
        // 87178291199 * 479001599 = 41758540882408627201
        if password % 479001599 == 0 {
            return format!("PHOENIX{{{}_IS_NICE}}", password / 479001599);
        }
    }

    "Passordet er feil!".to_string()
}

#[wasm_bindgen]
pub fn i_love_math_and_prime_numbers_smile() {}
