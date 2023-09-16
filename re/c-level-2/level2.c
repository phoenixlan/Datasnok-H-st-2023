#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "words.h"


const char* pre = "PHOENIX{";
const char* post = "}";

int main(int argc, char** argv) {
    if(argc != 2) {
        printf("Please provide a flag\nExample: ./level2 [flag]\n");
        return 1;
    }

    char flag[0x200];

    sprintf(flag, "%s%s_%s_%s%s", pre, word20, word9, word31, post);

    if(!strcmp(flag, argv[1])) {
        printf("Correct flag!\n");
    } else {
        printf("bad flag\n");
    }
    
    return 0;
}