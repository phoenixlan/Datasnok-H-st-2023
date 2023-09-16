#include <stdio.h>
#include <string.h>
#include <stdlib.h>

unsigned char* flag = "PHOENIX{N0_n33d_70_r3}";

int main(int argc, char** argv) {
    if(argc != 2) {
        printf("Please provide a flag\nExample: ./flagChecker [flag]\n");
        return 1;
    }

    if(!strcmp(flag, argv[1])) {
        printf("Correct flag!\n");
    } else {
        printf("bad flag\n");
    }
    
    return 0;
}