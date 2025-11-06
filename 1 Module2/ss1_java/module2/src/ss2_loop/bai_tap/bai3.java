package ss2_loop.bai_tap;

import java.util.Scanner;

public class bai3 {
    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        } else {
            for (int i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }


    public static void main(String[] args) {
        int count=0;
        for (int i = 2; count<20; i++) {
            if (isPrime(i)) {
                count++;
                System.out.println(i);
            }
        }
    }
}


