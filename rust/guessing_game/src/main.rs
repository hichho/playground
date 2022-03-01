use rand::Rng;
use std::cmp::Ordering;
use std::io; //prelude 预定义 //trait 接口 //比较的枚举类型
fn main() {
    println!("guessing_game!already?");
    let secret_number = rand::thread_rng().gen_range(1, 101); //i32 u32 i64 (u32:无符号整数类型)
                                                              // println!("神秘数字是:{}", secret_number);

    loop {
        println!("type a number");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("can not read line!");
        //shadow
        //trim:去掉空白(\n),parse :to int
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small"), //arm
            Ordering::Greater => println!("Too big"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
