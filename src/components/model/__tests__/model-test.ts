import Model from './../model';
import { assert } from 'chai';

describe('(class Model) Тест модели', () => {
  describe('Тест аксесоров width и height при различных параметрах модели', () => {
    const checkSize = function(w: number, h: number) {
      const GoL = new Model(w,h);
      if (h >= 10)
        it(`геттер height должен вернуть ${Math.floor(h)} при ${h}`, () => {
          assert.equal(GoL.height, Math.floor(h), `вернул ${GoL.height}`);
        });
      else
        it(`геттер height должен вернуть 50 при значении меньше 10`, () => {
          assert.equal(GoL.height, 50, `вернул ${GoL.height}`);
        });
      if (w >= 10)
        it(`геттер width должен вернуть ${Math.floor(w)} при ${w}`, () => {
          assert.equal(GoL.width, Math.floor(w), `вернул ${GoL.width}`);
        });
      else
        it(`геттер width должен вернуть 50 при значении меньше 10`, () => {
          assert.equal(GoL.width, 50, `вернул ${GoL.width}`);
        });
    }
    for (let i = 1; i <= 10; i++) {
      checkSize(Math.random() * (501 - -500) - 500, 
                  Math.random() * (501 - -500) - 500);
    }
  });
})