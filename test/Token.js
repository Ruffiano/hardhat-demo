const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', ()=> {
    let Token, token, owner, addr1, addr2;

    beforeEach(async ()=> {
        Token = await ethers.getContractFactory('Token');
        token = await Token.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });

    describe('Deploloyment', ()=> {
        it('Should set the right owner', async() => {
            expect(await token.owner().to.equal(owner.address));
        })

        it('should assign the total supply of tokens to the owner', async() => {
            const ownerBalance = await token.balaceOf(owner.address);
            expect(await token.totalSupply().to.equal(ownerBalance));
        })
    });

    describe('Transactions', () => {
        it('Should transfer tokens between accounts', async () => {
            await token.transfer(addr1.address, 50);
            const addr1Balance = await token.balaceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await token.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await token.balaceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        })

        it('Should fail if sender doesnt have anougt tokens', async() => {
            const initialBalanceOwner = await token.balaceOf(owner.address);

            await expect(
                token
                    .connect(addr1)
                    .transfer(owner.address, 1)
            ).to.be.revertedWith('Not enough tokens');

            expect(await token.balaceOf(owner.address))
            .to.equal(initialBalanceOwner);
        })

        it('Should update balance after transfer', async() => {
            const initialBalanceOwner = await token.balaceOf(owner.address);
        })
    });
});